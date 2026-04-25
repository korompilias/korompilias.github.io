export function ResponsiveImage({
  image,
  alt = "",
  className,
  loading = "lazy",
  decoding = "async",
  sizes,
  ...props
}) {
  if (!image) {
    return null;
  }

  if (typeof image === "string") {
    return <img src={image} alt={alt} className={className} loading={loading} decoding={decoding} {...props} />;
  }

  const resolvedSizes = sizes ?? image.sizes;

  return (
    <picture>
      {image.webpSrcSet ? (
        <source srcSet={image.webpSrcSet} sizes={resolvedSizes} type="image/webp" />
      ) : null}
      {image.srcSet ? (
        <img
          src={image.src}
          srcSet={image.srcSet}
          sizes={resolvedSizes}
          alt={alt}
          className={className}
          loading={loading}
          decoding={decoding}
          {...props}
        />
      ) : (
        <img src={image.src} alt={alt} className={className} loading={loading} decoding={decoding} {...props} />
      )}
    </picture>
  );
}
