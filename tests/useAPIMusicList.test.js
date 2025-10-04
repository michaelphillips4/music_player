/* import { expect, it, describe } from "vitest";
import { renderHook, waitFor } from '@testing-library/react';
import useAPIMusicList from '../src/useAPIMusicList';
import { bucketUrl } from "../src/Data";

describe('useSearch', () => { 
    it('should return a default search term and original items', () => { 
        const items = [{ title: 'Star Wars' }];

        const { result } = renderHook(() => useAPIMusicList(bucketUrl));

        expect(result.current.items).toBe('');
        expect(result.current.filteredItems).toEqual(items);
    });
}); */