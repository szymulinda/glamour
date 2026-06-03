import type { ImgHTMLAttributes } from "react";

type OptimizedImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  priority?: boolean;
};

const OptimizedImage = ({
  priority = false,
  loading,
  fetchPriority,
  decoding = "async",
  ...props
}: OptimizedImageProps) => (
  <img
    {...props}
    loading={priority ? "eager" : loading ?? "lazy"}
    fetchPriority={priority ? "high" : fetchPriority}
    decoding={decoding}
  />
);

export default OptimizedImage;
