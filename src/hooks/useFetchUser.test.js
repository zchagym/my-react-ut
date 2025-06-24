import { renderHook, waitFor } from "@testing-library/react";
import useFetchUser from "./useFetchUser";

beforeAll(() => {
    global.fetch = vi.fn();
});
afterEach(() => {
    vi.clearAllMocks();
});

test("请求并返回 user 数据", async () => {
    global.fetch.mockResolvedValueOnce({
        json: async () => ({ id: 1, name: "Jack" }),
    });

    const { result } = renderHook(() => useFetchUser(1));

    await waitFor(() => {
        expect(global.fetch).toHaveBeenCalledWith('/api/user/1')
        expect(result.current).toEqual({ id: 1, name: "Jack" })
    });
});
