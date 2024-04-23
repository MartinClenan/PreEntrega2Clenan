import Page from "../Page";
import UserList from "../UserList";

function Main() {
  const name = "Martin";
  return (
      <Page title="Home">
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 users">
          {/* <UserCard name="Maria" age="25" isDev={true} />
          <UserCard name="Pedro" age="23" isDev={false} />
          <UserCard name="Luis"  age="24" isDev={true}/> */}
          {/* <Timer /> */}
          <UserList/> 
        </section>
      </Page>

  );
}

export default Main;
