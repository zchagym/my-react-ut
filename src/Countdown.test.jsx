import { render, screen, waitFor, act } from '@testing-library/react'
import Countdown from './Countdown'
import { vi } from 'vitest'

beforeAll(() => vi.useFakeTimers())
afterAll(() => vi.useRealTimers())

test('倒计时数值变化', async () => {
    render(<Countdown time={3} />)
    expect(screen.getByTestId('count')).toHaveTextContent('3')

    await act(async () => {
        vi.advanceTimersByTime(1000)
    })
    expect(screen.getByTestId('count')).toHaveTextContent('2')

    await act(async () => {
        vi.advanceTimersByTime(1000)
    })
    expect(screen.getByTestId('count')).toHaveTextContent('1')
})
