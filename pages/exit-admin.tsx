import { useEffect } from "react";
import { useRouter } from "next/router";
import { Section } from "../components/section";
import { Layout } from "../components/layout";
import { useEditState } from "tinacms/dist/edit-state";

const GoToEditPage: React.FC = () => {
  const { setEdit } = useEditState();
  const router = useRouter();
  useEffect(() => {
    setEdit(false);
    router.back();
  }, []);
  return (
    <Layout>
      <Section className="flex-1">
        <h2>Exiting edit mode...</h2>
      </Section>
    </Layout>
  );
};

export default GoToEditPage;
