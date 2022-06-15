import React from "react";
import { dataLayerEvent } from "@util/ga";
import { chakra, ChakraProps } from "@chakra-ui/react";
import Link from "next/link";

type LinkProps = ChakraProps & {
  prefetch?: boolean;
  children?: any;
  target?: string;
  title?: string;
  rel?: string;
  route?: string;
  params?: object;
  idString?: string;
  disabled?: boolean;
  onClick?: () => void;
  analyticsId?: string;
  analyticsData?: Record<string, string | number>;
};

// links are tracked with page view
// if you write unit test [ "string' => 'output' ]
// motivation
// when to use it
// when not to use it
export function BaseLink(props: LinkProps) {
  const {
    prefetch = false,
    children,
    target,
    title,
    rel,
    route = "/",
    params = {},
    idString = "",
    analyticsId = "",
    analyticsData = {},
    disabled = false,
    onClick,
    ...rest
  } = props;

  const titleCom = (title || "").trim();
  // const paramsCom = { ...params, lang, country };
  const paramsCom = { ...params };

  const eventName = (analyticsId || "").substr(0, 150);

  const onClickDecorator = () => {
    if (eventName) {
      dataLayerEvent({ eventName: eventName, data: analyticsData });
    }
    onClick && onClick();
  };

  if (disabled) {
    return <chakra.button {...rest}>{children}</chakra.button>;
  }

  if (!route) {
    return (
      <chakra.a {...rest} onClick={onClickDecorator}>
        {children}
      </chakra.a>
    );
  }

  if (route.startsWith("http")) {
    return (
      <chakra.a
        id={idString}
        target={target}
        title={titleCom}
        rel={rel}
        href={route}
        onClick={onClickDecorator}
        {...rest}
      >
        {children}
      </chakra.a>
    );
  }

  return (
    <Link
      params={paramsCom}
      route={route}
      prefetch={prefetch}
      passHref
      href={route}
    >
      <chakra.a onClick={onClickDecorator} {...rest}>
        {children}
      </chakra.a>
    </Link>
  );
}
