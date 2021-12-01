import React from "react";
import { Spin } from "antd";

function SplashPage() {
  return (
    <div className="h-full w-full flex justify-center items-center">
      <Spin size="large" />
    </div>
  )
}

export default SplashPage;