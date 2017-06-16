import React from 'react'
import { Loading, Error } from 'components'
import Header from './Header'
import Line from './Line'
import { formatPrice } from 'helpers/utils'

const Details = ({ isLoading, isError, details, hideDetails }) => (
  <div style={{padding:'2em'}}>
    { isLoading && !Object.keys(details).length
      ? <Loading />
      : isError
        ? <Error />
        : <section>
            <Header id={details.invoice_number} fn={hideDetails} />
            <main>
              <h3>{details.vendor}</h3>
              <h2>{formatPrice(details.total)}</h2>
              <h4>{`Status: ${details.status}`}</h4>
              <h5>{`Received date: ${details.received_date}`}</h5>
              <h5>{`Invoice date: ${details.billing_start_date}`}</h5>
              <h5>{`Billing date (start/end): ${details.billing_start_date} - ${details.billing_end_date}`}</h5>
              <h3 style={{margin:'0.33em 0',padding:'0 0.12em',borderBottom:'1px solid #070707',display:'inline-block',lineHeight:1.25}}>
                {'Lines: '}
              </h3>
              <div style={{maxHeight:'150px',overflow:'auto',background:'#fff',border:'2px solid #e0e0e0',padding:'1em 1em 0'}}>
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
