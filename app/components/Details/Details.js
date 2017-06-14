import React from 'react'
import { Loading } from 'components'
import { formatPrice } from 'helpers/utils'
import Close from 'react-icons/lib/io/ios-close-empty'

const Details = ({ isLoading, details, hideDetails }) => (
  <div style={{height:'100%',width:'100%'}}>
    { isLoading && !Object.keys(details).length
      ? <Loading />
      : <section>
          <header>
            <h2>{`Invoice: ${details.invoice_number}`}</h2>
            <span onClick={hideDetails} style={{float:'right'}}><Close /></span>
          </header>
          <main style={{backgroundColor:'white'}}>
            <h3>{details.vendor}</h3>
            <h4>{details.status}</h4>
            <h5>{formatPrice(details.total)}</h5>
            <article>
              <h5>{`Subject: ${details.matters[0].description}`}</h5>
              <h5>{`Invoice Date: ${details.matters[0].invoice_date}`}</h5>
              <h5>{`Received Date: ${details.received_date}`}</h5>
              <h5>{`Status: ${details.matters[0].status}`}</h5>
            </article>
          </main>
        </section>
    }
  </div>
)

export default Details
