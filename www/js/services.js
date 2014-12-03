angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
    .factory('JobService', function($http) {
        return {
            titles: function() {
                //since $http.get returns a promise,
                //and promise.then() also returns a promise
                //that resolves to whatever value is returned in it's
                //callback argument, we can return that.
                return $http.get('http://dgm3790.iriscouch.com/test_assignment_db/_design/apiv1/_view/jobs')
                    .then(function(result) {
                        //  console.log(result.data.rows);
                        return result.data.rows;
                    });
            },
            getJob: function(jobId) {
                return $http.get('http://dgm3790.iriscouch.com/test_assignment_db/' + jobId)
                    .then(function(result) {
                        //console.log(result.data.data);
                        return result.data.data;
                    });
            }
        }
    });
