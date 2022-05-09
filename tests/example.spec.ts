import 'mocha';
import {expect} from 'chai';
import {hello} from '../src/example';

describe('test de prueba', ()=>{
  it('prueba de la funcion hello', ()=> {
    expect(hello()).to.be.eql('hello world');
  });
} );
