import { cloneElement, useMemo, useRef } from 'react';

type Props = {
  children: JSX.Element;
  props: {
    [key: string]: unknown;
  };
};

export default function ImgViewer({ children, props }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const Provider = useMemo(
    () =>
      ({
        component,
        ...props
      }: {
        component: JSX.Element;
        [key: string]: unknown;
      }) => {
        return cloneElement(component, {
          ...component.props,
          ...props,
          ref,
        });
      },
    [],
  );

  return <Provider {...props} component={children} />;
}
