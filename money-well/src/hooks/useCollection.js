import React, { useEffect, useState } from "react";
import { projectMoneyWell } from "../firebase/Config";

export const useCollection = (collection) => {
  const [document, setDocument] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ref = projectMoneyWell.collection(collection);
    const unsubscribe = ref.onSnapshot(
      (snapshot) => {
        const results = [];
        snapshot.docs.forEach((doc) => {
          results.push({ ...doc.data(), id: doc.id });
        });

        setDocument(results);
        setError(null);
      },
      (err) => {
        console.log(err);
        setError("Could not fetch the data");
      }
    );

    //unsubscribe on mount
    return () => unsubscribe();
  }, [collection]);

  return { document, error };
};
