import {c, css, Component, Type, useEvent} from 'atomico';
import {DOMEventTarget} from 'atomico/types/dom';

export type TButtonDisplay = 'block' | 'inline';
export type TButtonType = 'primary' | 'secondary';

/** Callback when button is clicked */
export type TButtonClick = (
  event: DOMEventTarget<MouseEvent, HTMLButtonElement, Element | Node>,
) => void;

export interface IButtonProps {
  /** The display style of the button, can be 'block' or 'inline' */
  display: TButtonDisplay;
  /** The type of button, can be 'primary' or 'secondary' */
  type: TButtonType;
}

const assembleButton: Component<IButtonProps> = ({
  display = 'block',
  type = 'primary',
}: IButtonProps) => {
  const dispatch: TButtonClick = useEvent('Click');

  return (
    <host shadowDom>
      {display && <style>{`:host{--display: ${display}}`}</style>}
      <button
        className={`button ${
          type === 'primary' ? 'button--primary' : 'button--secondary'
        }`}
        onclick={dispatch}
      >
        <slot />
      </button>
    </host>
  );
};

assembleButton.props = {
  display: String as Type<TButtonDisplay>,
  type: String as Type<TButtonType>,
};

assembleButton.styles = [
  css`
    :host {
      --primary500: yellow;
      --gray500: gray;
    }

    .button {
      color: black;
      float: left;
      font-size: 0.85rem;
      padding: 0.5rem 1rem;
      border-radius: 100px;
      cursor: pointer;
      display: var(--display);
    }

    .stack--space {
      margin-top: var(--space);
    }

    .button--primary {
      background: var(--primary500);
    }

    .button--secondary {
      background: var(--gray500);
    }
  `,
];

export const Button = c(assembleButton);
