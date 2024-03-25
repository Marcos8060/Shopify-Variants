import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";

const MenuItem = ({ menu }) => {
  const router = useRouter();
  const currentPath = router.pathname;

  return (
    <section>
      <span className="flex items-center justify-between p-2">
          <Link className={`${currentPath == menu.href ? 'bg-primary py-1 px-4 rounded text-white w-full' : ''} flex items-center gap-4`} href={menu?.href}>
            <p className="">{menu?.icon}</p>{" "}
            <p className="">{menu?.label}</p>
          </Link>
      </span>
    </section>
  );
};

export default MenuItem;
