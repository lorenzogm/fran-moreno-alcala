module.exports = {
  branchPrefix: 'renovate/',
  username: 'renovate-release',
  gitAuthor: 'Renovate Bot <bot@renovateapp.com>',
  onboarding: false,
  platform: 'github',
  includeForks: true,
  repositories: ['valtech-ch/ring'],
  packageRules: [
    {
      description: 'lockFileMaintenance',
      matchUpdateTypes: ['pin', 'digest', 'patch', 'minor', 'major', 'lockFileMaintenance'],
      dependencyDashboardApproval: false,
      stabilityDays: 0,
    },
  ],
};
