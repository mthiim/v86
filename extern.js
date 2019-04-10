/** @type {function(number,CPU,function(),function(),function(),function(),function(),function())} */
function StartMachine(x,cpu,f1,f2,f3,f4,f5,f6) { };


/** @constructor */
function MX()
{
   /** @type {function():number} */
   this.run;
   
   /** @type {function(number,number)} */
   this.unmap;

   /** @type {ArrayBuffer} */
   this.memory;


   /** @type {function(number)} */
   this.irq;

   /** @type {function(number,number,number,number):Array<number>|undefined} */
   this.cpuid;

   /** @type {function()|undefined} */
   this.iocallback;

   /** @type {number} */
   this.mem_counter;

   /** @type {number} */
   this.io_counter;

   /** @type {ArrayBuffer} */
   this.parambuf;
   

}
