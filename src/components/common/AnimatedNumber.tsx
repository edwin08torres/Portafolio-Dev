import { FC } from "react";
import { useAnimatedCount } from "../../hooks/useAnimatedCount";

interface Props {
  value: number;
  duration?: number; 
  suffix?: string;
}

export const AnimatedNumber: FC<Props> = ({
  value,
  duration = 500,
  suffix = "",
}) => {
  const count = useAnimatedCount(value, duration);
  return (
    <>
      {count}
      {suffix}
    </>
  );
};
