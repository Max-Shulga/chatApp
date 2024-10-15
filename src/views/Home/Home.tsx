import { ReactElement, useEffect } from "react";
import { useAppSelector } from "@/store/hooks";
import { useWhoAmIQuery } from "@/store/api";
import Container from "@/components/Container";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import RouteNames from "@/routes/routes-names";
import ThemeToggle from "@/components/ThemeToggle";

function Home(): ReactElement {
  const { user, isLoading } = useAppSelector((state) => state.user);
  const { refetch } = useWhoAmIQuery();
  useEffect(() => {
    if (!user) {
      refetch();
    }
  }, [user]);
  if (isLoading) return <div>Loading...</div>;

  return (
    <section className="flex w-full pt-10">
      <Container>
        <div className="flex flex-row justify-between">
          <div className="flex flex-col gap-3">
            <h2>User:</h2>
            <p>{user?.firstName}</p>
            <p>{user?.lastName}</p>
            <p>{user?.email}</p>
            <p>{user?.status}</p>
            <Link to={RouteNames.SIGN_IN}>
              <Button>
                <p>sigh-in</p>
              </Button>
            </Link>
          </div>
          <ThemeToggle />
        </div>
      </Container>
    </section>
  );
}
export default Home;
