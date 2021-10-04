import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useAuth } from "../../Config/AuthContext";
import { Link, useHistory } from "react-router-dom";
export default function Logout() {
  const history = useHistory();
  const [error, seterror] = useState("");
  const { currentUser, logout } = useAuth();
  async function handlelogout() {
    seterror("");

    try {
      await logout();
      history.push("/");
    } catch {
      seterror("fail");
    }
  }

  return (
    <div className="col-md-4">
      <Button onClick={handlelogout}>Logout</Button>
    </div>
  );
}
