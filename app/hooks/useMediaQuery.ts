import { useCallback, useEffect, useState } from 'react'

/**
 * Хук для отслеживания изменения медиа-запроса.
 *
 * @param {string} query - Медиа-запрос для отслеживания.
 *
 * @returns {boolean} Флаг, указывающий, соответствует ли текущее состояние медиа-запросу (true - соответствует, false - не соответствует).
 *
 * @example
 * // Пример использования:
 * const isLargeScreen = useMediaQuery('(min-width: 1024px)');
 * if (isLargeScreen) {
 *   // Экран больше 1024px.
 * }
 *
 * @category Hooks
 */
const useMediaQuery = (query: string) => {
  const getMatches = (query: string): boolean => {
    // Prevents SSR issues
    if (typeof window !== 'undefined') {
      return window.matchMedia(query).matches
    }
    return false
  }

  const [matches, setMatches] = useState<boolean>(getMatches(query))

  const handleChange = useCallback(() => {
    setMatches(getMatches(query))
  }, [setMatches, getMatches, query])

  useEffect(() => {
    const matchMedia = window.matchMedia(query)

    // Triggered at the first client-side load and if query changes
    handleChange()

    // Listen matchMedia
    if (matchMedia.addListener) {
      matchMedia.addListener(handleChange)
    } else {
      matchMedia.addEventListener('change', handleChange)
    }

    return () => {
      if (matchMedia.removeListener) {
        matchMedia.removeListener(handleChange)
      } else {
        matchMedia.removeEventListener('change', handleChange)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query])

  return matches
}

export default useMediaQuery
