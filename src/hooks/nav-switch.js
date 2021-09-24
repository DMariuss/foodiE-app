import { useState, useEffect, useMemo } from "react";

const useOnScrollChange = (options, target) => {
  const [isScrolled, setIsScrolled] = useState(false);

  const optionsMemo = useMemo(() => options, [options]);

  useEffect(() => {
    const currentTarget = target.current;

    const observer = new IntersectionObserver((entries, observer) => {
      const [entry] = entries; // aleg doar prima intrare

      //vreau sa modific starea in functie de valoarea isIntersecting
      //     cand nu se intersecteaza o seteaza ca true (pt a se adauga clasa respectiva)
      setIsScrolled(!entry.isIntersecting);
    }, optionsMemo);

    // conditie de siguranta, pt cazul in care nu am element selectat
    if (currentTarget) observer.observe(currentTarget);

    return () => {
      if (currentTarget) observer.unobserve(currentTarget);
    };
  }, [target, optionsMemo]);

  return isScrolled;
};

export default useOnScrollChange;
