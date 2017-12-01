angular.module('kizusiApp.policy', [])

.controller('PolicyController', function($scope){

	$scope.terms = 
[
	{ no: '1',
	  par: 'Kisuzi Smartex Limited(the company)\" hereby agree to let on hire the person named ' +
	        'overleaf\"(and the hirer) and the hirer hereby agrees to take and hire the' +
	        'motor vehicle described overleaf together with a spare tyre, jack, wheel spanner, toolkit' +
	        'and accessories carried with it or fixed or fitted the vehicle ' +
	        'hereinafter called the (the vehicle) upon terms and conditions set cut overleaf and hereunder'
	},
	{ no: '2',
	  par: 'The period of hire shalt be as set out on the RENTAL CAR AGREEMENT and the vehicle must be returned' +
	        'to the company on the date set out on the RENTAL CAR AGREEMENT unless the period of the hire is extended' +
	        'The vehicle shall be returned to the company\'s premises. ' +
	        'Extra Change ought to be required for each extra hour that the car hirer takes.' +
	        'For a Saloon Car it will be Ksh 500/= for a four wheel car Ksh 500/= per hour.'
	},
	{ no: '3',
	  par: 'In accepting the vehicle the hirer shall be deemed to have sane himself that the' + 
	  		'vehicle is road worthy and in proper and safe condition working order led the company'+ 
	  		'shalt not be liable to make any payment to the hirer in any way whatsoever for any'+
	  		'loss injury or damage sustained by the hirer or any other party as a result of any'+
	  		'defect in the vehicle or any break down.'
	},
	{ no: '4',
	  par: 'The Hirer further agrees that:',
	  conds: [
	           {cond_id: 'a',
	       		cond_par: 'He/She will not drive are to ensure that any authorized driver will not whilst he/she is under the influence ' +
	       		'of alcohol, hallucinations drugs, narcotics, barbiturates and any other substances impaling the'+
	       		'driver\'s conscienceness of ability to control the vehicle.'+
	       		'The vehicle will be driven in a skillfull manner and all traffic rules and Laws'+
	       		'and the provision of the Highway code shall at all time be observed and complied with.'+
	       		'The vehicle shall(a)not be overloaded or (b) carry more than its passengers capacity'+
	       		'specified on the PSV License on the windscreen'},
	       		{cond_id: 'b',
	       	     cond_par: 'The vehicle will be kept locked and secured when parked and every precaution'+ 
	       	     'will be taken to avoid theft of it or any item in it and damages to it.'
	       	     },
	       	     {cond_id: 'c',
	       	     cond_par: 'The vehicle shall be used for social and pleasure purposes and only on all weather roads.'+
	       	     'The vehicle shall at no time be used for racing or pace making or any nor for damage of goods for '+
	       	     'carriage charges or for carrying fare paying passengers.'
	       	     },
	       	     {cond_id: 'd',
	       	     cond_par: 'The vehicle shall not be taken out of Kenya unles authorized by the company or management'
	       	     },
	       	     {cond_id: 'e',
	       	     cond_par: 'The hirer shall promptly, and teresly pay parking and traffic fines and if he fails to do so '+
	       	     ', he shall be responsible to pay the company additional Ksh 500/= plus each fine not paid and to' +
	       	     'indemnify the company of any less or damage it may suffer as a  result of the hirer\'s butt.'
	       	     },
	       	     {cond_id: 'f',
	       	     cond_par: 'The hirer shall at alltimes check the oil and water levels and tyrepressure and in the event he fails to ' +
	       	     'do so , he shall be responsible to reimburse to and to indemnify the company of any loss, damage or expenses that it may suffer.' +
	       	     'Temparature gauge & engine warning lights must be respected and and adhered to.'
	       	     },
	       	     {cond_id: 'g',
	       	     cond_par: 'Unless authorrized by the company in writing the hirer under in, any circumstances ' +
	       	     'should not modify, fit any extra accessories or repair the vehicle. The company shall  not be liable for ' +
	       	     'any defects or damages in the vehicle.'
	       	     },
	       	     {cond_id: 'h',
	       	     cond_par: 'Notwithstanding anything herein contained ease of breakdown or an accident or damages to the vehicle as' +
	       	     'a result of willful act or gross neglect of the hirer or the authorized driver, the Hirer shall pay ' +
	       	     'the company the total cost of towing the vehicle to the company\'s premise and full cost of ' +
	       	     'repairing the vehicle .'
	       	     },
	       	     {cond_id: 'i',
	       	     cond_par: 'The hirer shall be responsible to pay for repair or puncture , replacing but tyres ' +
	       	     'stolen or lost spare tyres , damaged or broken windscreen or glasses, damaged rims, tools ' +
	       	     '(including jack & handle), tape recorder radio, as CDI does not over these items.'
	       	     },
	       	     {cond_id: 'j',
	       	     cond_par: 'Incase of an accident(involving the vehicle), the hirer or the authorized drivershall report ' + 
	       	     'to the police and to the company immediately no matter how minimal the accident is and shall supply ' +
	       	     'to the company the police officer\'s name , number and the details of the police station.' +
	       	     'In no circumstances shall liability be admitted . The hirer shall at the earliest opportunity  and ' +
	       	     'in  any case not less than 48hrs alter the occurrence , of the accident give a full statement in writing' +
	       	     'of how the accident occurred and fill in and sign the claim form and also provide an'  +
	       	     'abstract of form duly completed. If and when required the hirer shall make available the' +
	       	     'driver to give any statements as may be required by the company.'},
	       	     {cond_id: 'k',
	       	     cond_par: 'If any anti-theft devices installed in the vehicle is not utilized by the hirer , and the vehicle ' +
	       	     'is stolen , the CDI will be void the hirer will be called upon to pay the cost of the vehicle. '
	       	     },
	       	     {cond_id: 'l',
	       	     cond_par: 'In case of an accident the towing charges are bound to be paid by the' +
	       	     'Hirer to company garage.'
	       	     }
	        ]
	     },
	  { no: '5',
	    conds: [
	          {cond_id: 'a',
	       	   cond_par: 'The insurance policy covering the has been made available to the hirer ' +
	       	            'as he/she hereby acknowledges and the authorized driver shall at all times'
	       	  },
	       	  {cond_id : 'b',
	       	   cond_par: 'The vehicle is insured for Third Party Act only i.e only the liability to ' +
	       	   'compensate a third party(not the driver or the passengers) when injured.It des not include ' +
	       	   'damage to the vehicle or loss by fire or theft the vehicle or any material damages to any other ' +
	       	   'vehicle or property the driver and the passengers. In case of a third party injury claim , the hirer shall be responsible' +
	       	   'the Excess Premium 10% as stated by the company depending on the vehicle hired.'
	       	  },
	       	  {cond_id : 'c',
	       	   cond_par: 'If the driver takes out the Coalition Damage Waiver,He/She  shall be liable to pay the ' +
	       	   'amount indicated for coalition damage caused to the vehicle, damage to the vehicle by fire or theft of ' +
	       	   ' the vehicle.'
	       	     },
	       	  {cond_id: 'd',
	       	   cond_par: 'The vehicle whether or not CDI option is exercised does not cover',
	       	   inner : 
	       	         [
	       	           {inn_cond_id:'1)',
						inn_cond_par: 'Any loss of items from the vehicle'
	       	            },
	       	            {inn_cond_id:'2)',
						inn_cond_par: 'Any breakdown or damage to the vehicle other than by collision'
	       	            },
	       	            {inn_cond_id:'3)',
						inn_cond_par: 'Injuries to the hirer or driver or the passengers'
	       	            },
	       	            {inn_cond_id:'4)',
						inn_cond_par: 'Burst tyres, stolen, lost spare wheel, damaged, broken widscreen or glasses ' +
						', damaged rims, tools(include jack & handle) tape recorder and radio.'
	       	           }
	       	           ]
	       	          },
	       	  {cond_id : 'e',
	       	   cond_par: 'Incase of an accident or any other unprecedented occurrence that will involve the insurance ' +
	       	             ', the hirer is liable to pay the total value of the car.' 
	       	     },
	         ]
	  }
]

	$scope.important =
	[
	  {imp_id : '(i)',
	   imp_par: 'The hirer is bound to use the vehicle at specified place as per the contract' },
	   {imp_id : '(ii)',
	   imp_par: 'In the event of a minor accident involving the client being at fault, he/she is liable ' +
	           'to cover the cost of damage and the daily rate charges as agreed on the contract' +
	           'until the vehicle is back and running to the compny\'s specifications.' 
	       },
	   {imp_id : '(iii)',
	   imp_par: 'The hirer must report to the company any inident(s) that occur while the vehicle as the ' +
	          'company will not accept any repairs with prior notification.' 
	       },
	    {imp_id : '(iv)',
	   imp_par: 'The insurance cover aforesaid is available if the terms and condtions of the ; Insurance policy' +
	             'are complete with failure to which the hirer or the authorized driver shall be fully responsible' +
	             '  for  damages and the cost of repair and will indemnify the ompany in respect of any loss of damages' +
	             'to the vehicle or any other claims and expenses whatsoever.' 
	       },

	];

	$scope.pay_terms =
	[
	  {pay_id : '(6)',
	   pay_par: 'All accounts must b settled when the car is hired out in full, for the period specified for hire.'+
	   'And in case of an extended period the hirer is to pay the company the total amount upon return of the'+
	   'vehicle. Failure to comply with this will result to added 10% charge every week for the amount accrued for '+
	   'hiring'
	    },
	   {pay_id : '(7)',
	    pay_par: 'Besides deposit, full identification. Physical address and passport colored photo or full image of'+
	             'the hirer must be given and where required by the company an acceptable guarantee shall be given.' 
	       },
	   {pay_id : '(8)',
	   pay_par: 'I hereby agree to the terms and conditions of this contract and do commit to abide by them and accept full'+
	            'responsibility for the vehicle for the entire duration of the hire.' 
	       }

	]
	

});