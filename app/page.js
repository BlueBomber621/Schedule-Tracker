"use client"

// Importing React and Context here
import { useContext, useState } from "react";
import { authContext } from "./lib/store/auth-context";
import SignUpPage from "./components/SignUpPage";
import Navbar from "./components/Navbar";
import SchedulePage from "./components/SchedulePage";
import CreatePage from "./components/CreateTaskPage";
import ViewTaskPage from "./components/ViewTask";
import HomePage from "./components/HomePage";
import ProfilePage from "./components/ProfilePage";
import EditTaskPage from "./components/EditTaskPage";

export default function Home() {
  const [page, setPage] = useState("home");

  const { user } = useContext(authContext);

  if (!user) return <SignUpPage />;

  const renderPage = () => {
    if (page === "home") {
      return <HomePage setPage={setPage} />;
    } else if (page === "schedule") {
      return <SchedulePage setPage={setPage} />;
    } else if (page === "create") {
      return <CreatePage setPage={setPage} />;
    } else if (page === "profile") {
      return <ProfilePage setPage={setPage} />;
    } else if (page.startsWith("view-")) {
      const taskId = page.replace("view-", "");
      return <ViewTaskPage taskId={taskId} page={page} setPage={setPage} />;
    } else if (page.startsWith("edit-")) {
      const taskId = page.replace("edit-", "");
      return <EditTaskPage taskId={taskId} page={page} setPage={setPage} />;
    }
  };

  return (
    <>
      <Navbar page={page} setPage={setPage} />
      {renderPage()}
    </>
  );
}