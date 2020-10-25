import React, { IframeHTMLAttributes } from 'react';
import { styled } from '@storybook/theming';
import { Zoom } from '@storybook/components';

const StyledIframe = styled.iframe({
  position: 'absolute',
  display: 'block',
  boxSizing: 'content-box',
  height: '100%',
  width: '100%',
  border: '0 none',
  transition: 'all .3s, background-position 0s, visibility 0s',
  backgroundPosition: '-1px -1px, -1px -1px, -1px -1px, -1px -1px',
});

export interface IFrameProps {
  id: string;
  title: string;
  src: string;
  allowFullScreen: boolean;
  scale: number;
  active: boolean;
}

export function IFrame(props: IFrameProps & IframeHTMLAttributes<HTMLIFrameElement>) {
  const { active, id, title, src, allowFullScreen, ...rest } = props;
  return (
    <Zoom {...props}>
      <StyledIframe
        data-is-storybook={active ? 'true' : 'false'}
        id={id}
        title={title}
        src={src}
        allowFullScreen={allowFullScreen}
        {...rest}
      />
    </Zoom>
  );
}
