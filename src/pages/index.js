import CustomizedLayout from "@/components/layout/customized-layout";

export default function Home() {
  return (
    <section>Welcome to the Home Page</section>
  );
}

Home.getLayout = (page) => (
  <CustomizedLayout>{page}</CustomizedLayout>
)
