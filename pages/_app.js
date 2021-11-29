import "../styles.css";
import { useEffect } from "react";
import dynamic from "next/dynamic";
import { TinaEditProvider } from "tinacms/dist/edit-state";
import { Layout } from "../components/layout";
import { TinaCloudCloudinaryMediaStore } from "next-tinacms-cloudinary";
import FourOhFour from "./404";
import TagManager from 'react-gtm-module';


const TinaCMS = dynamic(() => import("tinacms"), { ssr: false });
const NEXT_PUBLIC_TINA_CLIENT_ID = process.env.NEXT_PUBLIC_TINA_CLIENT_ID;
const NEXT_PUBLIC_USE_LOCAL_CLIENT =
  process.env.NEXT_PUBLIC_USE_LOCAL_CLIENT || 0;
const SERVER_ENV = process.env.SERVER_ENV || "staging";

function getMaybeRedirect(redirects) {
  if (!redirects) return;
  const currentPath = window.location.href.replace(window.location.origin, "");

  return redirects.find((redirect) => {
    return redirect.from === currentPath;
  });
}

const App = ({ Component, pageProps }) => {
  useEffect(() => {
    const gtmId = pageProps.data?.getGlobalDocument?.data?.gtmId ? pageProps.data.getGlobalDocument.data.gtmId : "GTM-XXXXX";
    TagManager.initialize({ gtmId: gtmId });
    const maybeRedirect = getMaybeRedirect(
      pageProps.data?.getGlobalDocument?.data?.redirects
    );
    if (maybeRedirect) {
      window.location.href = maybeRedirect.to;
    }
  }, []);
  const maybePage = pageProps.data?.getPagesDocument?.data;
  if (SERVER_ENV === "prod" && maybePage?.draft) {
    // On production, any page in draft mode should be a 404
    return <FourOhFour />;
  }
  return (
    <>
      <TinaEditProvider
        showEditButton={false}
        editMode={
          <TinaCMS
            branch="main"
            clientId={NEXT_PUBLIC_TINA_CLIENT_ID}
            isLocalClient={Boolean(Number(NEXT_PUBLIC_USE_LOCAL_CLIENT))}
            mediaStore={TinaCloudCloudinaryMediaStore}
            cmsCallback={(cms) => {
              import("react-tinacms-editor").then(({ MarkdownFieldPlugin }) => {
                cms.plugins.add(MarkdownFieldPlugin);
              });
            }}
            documentCreatorCallback={{
              /**
               * After a new document is created, redirect to its location
               */
              onNewDocument: ({ collection: { slug }, breadcrumbs }) => {
                const relativeUrl = `/${breadcrumbs.join("/")}`;
                return (window.location.href = relativeUrl);
              },
              /**
               * Only allows documents to be created to the `Pages` Collection
               */
              filterCollections: (options) => {
                return options.filter(
                  (option) => option.label === "Pages"
                );
              },
            }}
            /**
             * Treat the Global collection as a global form
             */
            formifyCallback={({ formConfig, createForm, createGlobalForm }) => {
              if (formConfig.id === "getGlobalDocument") {
                return createGlobalForm(formConfig);
              }

              return createForm({
                ...formConfig,
                fields: formConfig.fields.map(field => {
                  console.log(JSON.stringify(field))
                  if (field.name === 'siteTitle') {
                    // replace `text` with `textarea`
                    field.component = 'textarea'
                  }
                  return field
                }),
              });
            }}
            {...pageProps}
          >
            {(livePageProps) => (
              <Layout
                rawData={livePageProps}
                themeData={livePageProps.data?.getPagesDocument?.data}
                data={livePageProps.data?.getGlobalDocument?.data}
              >
                <Component {...livePageProps} />
              </Layout>
            )}
          </TinaCMS>
        }
      >
        <Layout
          rawData={pageProps}
          themeData={pageProps.data?.getPagesDocument?.data}
          data={pageProps.data?.getGlobalDocument?.data}
        >
          <Component {...pageProps} />
        </Layout>
      </TinaEditProvider>
    </>
  );
};

export default App;
