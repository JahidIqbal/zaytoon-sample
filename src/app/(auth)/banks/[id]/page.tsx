import PageContainer from "@/components/layout/PageContainer";
import UserForm from "../components/UserForm";
import { IdProps } from "@/types/Common";
import { User } from "../Types";
import { get } from "@/api/ApiClient";
import L3Breadcrumb from "@/components/layout/L3Breadcrumb";

const Page = async (props: IdProps) => {
  const user = await get<User>(`api/v1/admin-user/${(await props.params).id}`);

  return (
    <div>
      <div className="flex justify-between items-center ml-4">
        <div className="flex flex-col mt-6">
          <L3Breadcrumb midLabel="Admin Users" midUrl="/admin-users" lastLabel={user.firstName} />
        </div>
      </div>

      <PageContainer title="Update Admin Users">
        <UserForm user={user} />
      </PageContainer>
    </div>
  )
}

export default Page;