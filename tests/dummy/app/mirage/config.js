import config from '../config/environment'

export default function () {
  if (config && config.isDemo) {
    this.namespace = 'https://ciena-frost.github.io'
  }

  this.get('/list-items', function (db, {queryParams: qp}) {
    return {
      data: db.listItems.slice(qp.start, +qp.start + +qp.pageSize).map((attrs) => {
        return {
          type: 'list-items',
          id: attrs.id,
          attributes: attrs
        }
      })
    }
  })

  this.passthrough()
}
