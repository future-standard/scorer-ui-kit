interface ISvgIcons extends React.SVGProps<SVGSVGElement> {
  size: number
  color: 'mono' | 'dimmed' | 'subtle' | 'inverse' | 'primary' | 'danger' | 'white';
  weight: number
}