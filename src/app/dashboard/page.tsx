import { auth, currentUser } from "@clerk/nextjs/server";

export default async function DashboardPage() {
  const authObj= await auth();    // return the authObj of currently active user
  const userObj= await currentUser();   // return backend userObj of currently active user
  console.log(authObj, userObj);
  return <h1>Dashboard Page</h1>;
}
