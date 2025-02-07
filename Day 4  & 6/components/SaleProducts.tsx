import { getSale } from '@/sanity/helpers'
import React from 'react'
import DiscountBanner from './DiscountBanner'

const SaleProducts = async () => {
  const sales = await getSale()
  return (
    <div>
      <DiscountBanner sales={sales} />
  
    </div>
  )
}

export default SaleProducts
