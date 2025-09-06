
import React, { useState } from "react";
import { MultiStepLoader as Loader } from "../components/ui/multi-step-loader";
import {loadingStates} from "../assets/Constants";
import { X } from 'lucide-react';

const CustomLoader = (loading, setLoading) => {

  return (
   <div className="w-full h-[60vh] flex items-center justify-center">
      {/* Core Loader Modal */}
      <Loader loadingStates={loadingStates} loading={loading} duration={2000} />
 
      {loading && (
        <button
          className="fixed top-4 right-4 text-black dark:text-white z-[120]"
          onClick={() => setLoading(false)}
        >
          <X className="h-10 w-10" />
        </button>
      )}
    </div>
  )
}

export default CustomLoader