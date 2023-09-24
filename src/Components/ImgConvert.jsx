export const ImgConvert = ({ folderPath, fileName, alt, isIcon = false }) => {
  const path = `${folderPath}/${fileName}`

  return (
    <picture>
      <source srcSet={`${path}.avif`} type="image/avif" />
      <source srcSet={`${path}.webp`} type="image/webp" />
      <img src={`${path}.${isIcon ? "png" : "jpg"}`} alt={alt} />
    </picture>
  )
}
