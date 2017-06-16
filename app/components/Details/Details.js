import React from 'react'
import { Loading, Error } from 'components'
import Header from './Header'
import Line from './Line'
import { formatPrice } from 'helpers/utils'

const Details = ({ isLoading, isError, details, hideDetails }) => (
  <div>
    { isLoading && !Object.keys(details).length
      ? <Loading />
      : isError
        ? <Error />
        : <section>
            <Header id={details.invoice_number} fn={hideDetails} />
            <main style={{backgroundColor:'white'}}>
              <h3>{details.vendor}</h3>
              <h2>{formatPrice(details.total)}</h2>
              <h4>{`Status: ${details.status}`}</h4>
              <h5>{`Received date: ${details.received_date}`}</h5>
              <h5>{`Invoice date: ${details.billing_start_date}`}</h5>
              <h5>{`Billing date (start/end): ${details.billing_start_date} - ${details.billing_end_date}`}</h5>
              <h3 style={{marginTop:'1em'}}>{'Lines: '}</h3>
              <div style={{maxHeight:'180px',overflow:'auto',border:'2px solid #070707',padding:'1em 2em 0',margin:'1em 2em'}}>
                { details.lines.map((el, i) => (
                  <Line
                    price={el.total}
                    timekeeper={el.timekeeper.split(',').join(', ')}
                    level={el.timekeeper_level}
                    description={el.description}
                    date={el.date}
                    key={i}
                  />)
                )}
              </div>
            </main>
          </section>
    }
  </div>
)

export default Details
