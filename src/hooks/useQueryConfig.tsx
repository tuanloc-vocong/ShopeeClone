import { ProductListConfig } from 'src/type/product.type'

export type QueryConfig = {
  [key in keyof ProductListConfig]: string
}

export default function useQueryConfig() {
  const queryParams: QueryConfig = useQueryParams
  return <div>useQueryConfig</div>
}
