import test from 'node:test'
import assert from 'node:assert/strict'
import { contextualNetworkLinks } from '../lib/contextual-network-links.js'
test('document verification does not acquire generic reciprocal referrals',()=>{assert.deepEqual(contextualNetworkLinks('nadra-verified-marriage-registration-certificate-service'),[])})
test('family-dispute and Karachi referral scopes are distinct',()=>{assert.equal(contextualNetworkLinks('divorce-in-islam-quranic-guidelines').length,1);assert.equal(contextualNetworkLinks('court-marriage-in-karachi').length,2);assert.equal(contextualNetworkLinks('nikah-nama-english-urdu-karachi')[0].label,'Karachi Lawyers')})
