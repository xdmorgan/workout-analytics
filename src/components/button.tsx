import cx from 'classnames';
import { Link } from 'react-router-dom';
import styles from './button.module.scss';

interface ButtonProps {
  as?: any;
  href?: string;
  to?: string;
  className?: string;
  appearance?: 'primary' | 'secondary' | 'ghost';
  size?: 'small' | 'large';
  theme?: 'light' | 'dark';
  [props: string]: any;
}

export function Button({
  href,
  to,
  className,
  size,
  as = 'button',
  appearance = 'primary',
  theme = 'light',
  ...props
}: ButtonProps) {
  let Element = as;
  if (to) Element = Link;
  if (href) Element = 'a';
  return (
    <Element
      {...props}
      to={to}
      href={href}
      {...(Element === 'button' ? { type: 'button' } : {})}
      className={cx(
        styles.button,
        {
          [styles[`button--${theme}`]]: theme && styles[`button--${theme}`],
          [styles[`button--${theme}--${appearance}`]]: theme && appearance,
          [styles[`button--${size}`]]: !!size,
          'is-active': !!props['aria-pressed'],
        },
        className
      )}
    />
  );
}

interface ButtonGroupProps {
  as?: any;
  className?: string;
  [props: string]: any;
}

function Group({ as: Element = 'div', className, ...props }: ButtonGroupProps) {
  return (
    <Element role="group" {...props} className={cx(styles.group, className)} />
  );
}

Button.Group = Group;
