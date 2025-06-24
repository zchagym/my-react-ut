import { render, screen, fireEvent } from '@testing-library/react'
import Button from './Button.jsx'
import * as reportModule from './utils/report'

test('点击时会调用 reportClick', () => {
    const spy = vi.spyOn(reportModule, 'reportClick')
    render(<Button />)
    fireEvent.click(screen.getByText("Click"))
    expect(spy).toHaveBeenCalledWith("用户点击")
})
