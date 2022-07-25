import clientRepository from '~/api/client'

export default ($axios) => ({
    client: clientRepository($axios),
})