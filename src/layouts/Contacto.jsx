import { Form, Button } from 'react-bootstrap/'
const Contacto = () => {
  return (
    <div className='text-center'>
      <h1>Cuéntanos, ¿En que te podemos ayudar?</h1>
      <Form>
        <Form.Group className='m-5' controlId='exampleForm.ControlInput1'>
          <Form.Label>Correo</Form.Label>
          <Form.Control type='email' placeholder='name@example.com' />
        </Form.Group>
        <Form.Group className='m-5' controlId='exampleForm.ControlTextarea1'>
          <Form.Label>Descripción</Form.Label>
          <Form.Control as='textarea' rows={5} />
        </Form.Group>
      </Form>
      <Button variant='danger' size='lg'>Enviar</Button>{' '}
    </div>
  )
}

export default Contacto
