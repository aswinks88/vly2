import test from 'ava'
import request from 'supertest'
import { server, appReady } from '../../../server'

test.only('Should respond to health check', async t => {
  await appReady
  const res = await request(server)
    .get('/api/health')
    .set('Accept', 'application/json')
    .expect(200)
    .expect('Content-Type', /json/)

  const health = res.body
  t.is(health.health, 'OK')
})

test('Should respond to parameter check', async t => {
  await appReady
  const res = await request(server)
    .get('/api/health/test1')
    .set('Accept', 'application/json')
    .expect(200)
    .expect('Content-Type', /json/)

  const health = res.body
  // console.log(health)
  t.is(health.health, 'OK')
  t.is(health.params.param1, 'test1')
})

test('Should respond to query check', async t => {
  await appReady
  const res = await request(server)
    .get('/api/health?a=1&b=["one","two","three"]')
    .set('Accept', 'application/json')
    .expect(200)
    .expect('Content-Type', /json/)

  const health = res.body
  t.is(health.health, 'OK')
  t.is(health.query.a, '1')
  t.is(health.query.b.length, 21) // its a string not an array
  const arr = JSON.parse(health.query.b)
  t.is(arr.length, 3)
})
