'use client';

import { useEffect } from "react";
import netlifyIdentity from "netlify-identity-widget";

export default function NetlifyInit() {
  useEffect(() => {
    netlifyIdentity.init();
  }, []);

  return null;
}

