'use strict';


module.exports = function(app , mongoose)
{
	require('./server/schema/car')(app , mongoose);
	require('./server/schema/users')(app , mongoose);
	require('./server/schema/prices')(app , mongoose);
	require('./server/schema/reserve')(app , mongoose);
	require('./server/schema/rent_out')(app , mongoose);
	require('./server/schema/notification')(app , mongoose);
	require('./server/schema/todoUsers')(app , mongoose);
	require('./server/schema/todolist')(app , mongoose);
}
