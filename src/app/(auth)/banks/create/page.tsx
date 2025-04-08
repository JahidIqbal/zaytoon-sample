import PageContainer from "@/components/layout/PageContainer";
import UserForm from "../components/UserForm";
import L3Breadcrumb from "@/components/layout/L3Breadcrumb";

const Page = async () => {
  return (
    <div>
      <div className="flex justify-between items-center ml-4">
        <div className="flex flex-col mt-6">
          <L3Breadcrumb midLabel="Admin Users" midUrl="/admin-users" lastLabel="Create" />
        </div>
      </div>

      <PageContainer title="Create New Admin Users">
        <UserForm />
      </PageContainer>
    </div>
  )
}

export default Page