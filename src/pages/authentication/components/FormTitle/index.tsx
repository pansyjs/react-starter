interface FormTitleProps {
  title?: string;
}

export const FormTitle = (props: FormTitleProps) => {
  return (
    <h2 className="mb-8 text-2xl font-bold text-center xl:text-3xl enter-x xl:text-left">
      {props.title}
    </h2>
  )
}
