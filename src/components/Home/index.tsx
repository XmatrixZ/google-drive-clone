import React from "react";
import { signIn, signOut } from "next-auth/react";
import Button from "@/components/common/Button";
import { useFetchSession } from "@/hooks/useSession";
import styles from "./Home.module.scss";
import Image from "next/image";
function HomeComponent() {
  const { session } = useFetchSession();
  return (
    <div className={styles.authBtn}>
      {session ? (
        // <Button
        //   onClick={() => signOut()}
        //   ButtonClass="btn-primary"
        //   title="Sign Out !!"
        // />
        <img
          className={styles.profileImg}
          // eslint-disable-next-line @typescript-eslint/non-nullable-type-assertion-style
          src={session?.user.image as string}
          alt="Profile Image"
        />
      ) : (
        <Button
          // eslint-disable-next-line @typescript-eslint/no-misused-promises
          onClick={() => signIn()}
          ButtonClass="btn-primary"
          title="Sign Up !!"
        />
      )}
    </div>
  );
}

export default HomeComponent;
