"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const LoginPage = () => {
  const router = useRouter();
  const [submitError, setSubmitError] = useState("");
  return <div>page</div>;
};

export default LoginPage;
