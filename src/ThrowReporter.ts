/**
 * @deprecated
 * @since 1.0.0
 */
import { Reporter } from './Reporter'
import { PathReporter } from './PathReporter'
import { isLeft } from 'https://raw.githubusercontent.com/zgotsch/fp-ts/70244ecc690ea3786fbecd9723533e74b8cd596d/src/Either.ts'

/**
 * @category deprecated
 * @since 1.0.0
 * @deprecated
 */
export const ThrowReporter: Reporter<void> = {
  report: (validation) => {
    if (isLeft(validation)) {
      throw new Error(PathReporter.report(validation).join('\n'))
    }
  }
}
