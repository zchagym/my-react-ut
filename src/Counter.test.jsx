import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';

describe('Counter 组件', () => {
    it('初始显示为0', () => {
        render(<Counter />);
        expect(screen.getByTestId('display')).toHaveTextContent('0');
    });
    it('点击按钮计数+1', () => {
        render(<Counter />);
        fireEvent.click(screen.getByText('+1'));
        expect(screen.getByTestId('display')).toHaveTextContent('1');
    });
    it('Counter渲染快照', () => {
        const view = render(<Counter />);
        expect(view.asFragment()).toMatchSnapshot();
    });
    it('初始状态下，显示为0', () => {
        render(<Counter />);
        // 用 toBeInTheDocument 检查元素在页面中
        expect(screen.getByText('0')).toBeInTheDocument();
        // 用 getByRole 查询按钮，用户视角最佳实践
        expect(screen.getByRole('button', { name: '+1' })).toBeInTheDocument();
    });

    it('点击后计数递增，文本内容变化', () => {
        render(<Counter />);
        fireEvent.click(screen.getByRole('button', { name: '+1' }));
        expect(screen.getByTestId('display')).toHaveTextContent('1');
    });

    it('按钮包含正确属性', () => {
        render(<Counter />);
        const btn = screen.getByRole('button', { name: '+1' });
        expect(btn).toHaveAttribute('type', 'button'); // type为默认button
    });

    it('不可见元素不会被匹配', () => {
        render(<Counter />);
        // 这个文本不存在，所以会报错（用于体验断言失败情况），可注释掉体验
        // expect(screen.getByText('999')).toBeInTheDocument();
    });
});
