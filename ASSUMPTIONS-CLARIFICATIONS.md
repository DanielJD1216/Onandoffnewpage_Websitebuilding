# Assumptions & Clarifications
**On & Off New Page Implementation Plan**

## 🔍 Key Assumptions Made

### Business Context
1. **Primary Language**: Korean is the dominant language (80%+ of users), English is secondary support
2. **Target Audience**: Korean families are the primary decision makers, not students themselves
3. **Communication Preference**: KakaoTalk is the preferred communication method for Korean families
4. **Business Hours**: Vancouver office operates PST, consultations available across KST/PST timezones
5. **Service Areas**: Focus on BC (Vancouver area), Ontario (Toronto area), with expansion to other provinces
6. **Budget Range**: 30-50M KRW/year per student mentioned in PRD (approximately $22-37K CAD)

### Technical Implementation
1. **Technology Stack**: Next.js 15 + Supabase confirmed as optimal choice
2. **Authentication**: Email-based signup with KakaoTalk integration for communication
3. **Payment Processing**: Phase 2 feature, not required for MVP
4. **Calendar Integration**: Phase 2 feature, manual scheduling for MVP
5. **CRM Integration**: Phase 2 feature, Supabase as initial CRM

### Design & User Experience
1. **Mobile-First**: 80% of traffic expected from mobile devices (Korean market pattern)
2. **Logo Usage**: Existing logo at `/MAIN/Logo/` will be used as primary brand identity
3. **Content Migration**: Existing Squarespace content will be audited and migrated
4. **SEO Strategy**: Dual optimization for both Naver (Korean search) and Google

## ❓ Questions Requiring Clarification

### Business Operations
1. **Consultation Capacity**: Is 100 consultations/month realistic for 2-3 team members? (We are expecting a little lower than 100 consultations a month. We can manage.)
2. **Pricing Structure**: What are the consultation fees and service package costs? (There is no consultation fee. )
3. **Office Location**: Specific Vancouver office address for local business schema markup? (204-1046 Austin Avenue, Coquitlam, British Columbia )
4. **Service Scope**: Do you provide visa application services or just educational guidance? (Yes, we do provide visa application services as well as educational guidance as well. )
5. **Partnerships**: Which specific Canadian schools/education boards are you partnered with? (There are different school districts, but Langley, Coquitlam, Barnaby, Vancouver, and Abbotsford are pretty much on board. The rest, we are still in contact, but we should be able to partner up with them in no time. )

### Content & Marketing
1. **Existing Content Audit**: Can you provide access to current Squarespace site for content migration? (I think it's better for us to just build it from scratch. Since there's not much content In the square space )
2. **Success Stories**: How many case studies are currently available? Can they be anonymized for website use? (We have a few, probably more than five. I'm pretty sure we can use them. )
3. **Team Credentials**: What certifications/qualifications should be highlighted for trust-building? (We can leverage the case studies that we have, I guess. )
4. **Regulatory Compliance**: Are there specific Canadian educational consultant licensing requirements? (Nope, no, not at all)
5. **Marketing Channels**: Beyond website, what marketing channels are planned (social media, referrals, partnerships)? (Pretty much referrals and partnerships and also through the tourism conference. )

### Technical Requirements
1. **Domain Name**: What domain will be used for the website? (It's going to be on and off newpage.com, however this domain is purchased in Squarespace, so we will have to use the Squarespace to deploy our website. )
2. **Email Setup**: Will you use existing business email or need new setup?(We're going to use the existing business in email, but primarily we're just going to be using the KakaoTalk channel. )
3. **Analytics Requirements**: Beyond basic metrics, any specific reporting needs? (This one I'm not so sure about, but pretty much how they got into our website is important. Otherwise, it's not that important. )
4. **Backup Strategy**: Any specific data backup or disaster recovery requirements? (By any means necessary, client information should be backed up in a database or we should never lose the data of the clients. )
5. **Third-party Integrations**: Any existing tools (CRM, scheduling, etc.) that need integration? (I don't think we are going to be using a lot of CRM or scheduling services or etc. that third-party integrations because all the major in a conversation and the communication back and forth will be handled in the Kakao Talk channel. )

### Korean Market Specifics
1. **KakaoTalk Business Account**: Do you have KakaoTalk Channel for Business set up? (let's configure this later)
2. **Korean Legal Compliance**: Any specific Korean data privacy requirements beyond PIPA? (No, don't worry about it too much )
3. **Payment Methods**: For Phase 2, preference for Korean payment methods (Toss, KakaoPay)? (This is also not a priority, and it can just be an e-transfer or bank transfer, so not to worry about this. )
4. **Naver Services**: Interest in Naver Blog, Naver Cafe, or other Naver ecosystem integration? (Too many competitors are already doing a lot of this. What we need to do is just copy their URL, credit to source, and pretty much paste to our website or whatever you know. )
5. **Korean Social Media**: Plans for Korean social media presence (Instagram, YouTube, etc.)? (Probably Instagram, but like I said, it's Mostly going to be through referrals or tourism conference, something like that, or global study conference. )

### Design & Branding
1. **Logo Variations**: Need for dark mode version, favicon, social media variants? (No need for a dark mode version, but favicon sounds awesome. )
2. **Photography**: Professional photos of Vancouver office, schools, or team available? (We can figure this out later. )
3. **Brand Voice**: Formal vs. friendly tone for Korean content? Different for English? (In between formal and friendly tones, but for headings it should be formal. )
4. **Accessibility Requirements**: Any specific accessibility needs beyond WCAG AA? (no, WCAG AA is good enough)
5. **Browser Support**: Any specific browser requirements for Korean users? (no not really)

## 🎯 Recommendations for Immediate Clarification

### Priority 1 (Critical for MVP)
- [ ] **KakaoTalk Integration Details**: Channel ID, API access, intended usage
- [ ] **Content Migration Scope**: Access to current site, priority pages to migrate
- [ ] **Team Information**: Credentials, photos, office details for About page
- [ ] **Domain and Email Setup**: Final domain name and email configuration

### Priority 2 (Important for Launch)
- [ ] **Success Stories**: Available case studies and permission for use
- [ ] **Service Pricing**: Consultation fees and service package details
- [ ] **Partnership Details**: Canadian school partnerships for credibility
- [ ] **Regulatory Requirements**: Educational consultant licensing info

### Priority 3 (Post-MVP Enhancement)
- [ ] **Payment Processing**: Preferred methods and integration timeline
- [ ] **CRM Requirements**: Specific workflow and reporting needs
- [ ] **Marketing Integration**: Social media and other marketing tool connections
- [ ] **Advanced Features**: Calendar integration preferences and requirements

## 🔄 Decision Points Requiring User Input

### Technical Architecture
**Question**: Should we implement real-time chat with KakaoTalk API or use KakaoTalk Channel plugin? (We should just use KakaoTalk Channel plugin, Or you can just insert a KakaoTalk channel URL in the icon itself and go from there, it's easier. )
- **Option A**: Direct API integration (more control, complex setup) 
- **Option B**: KakaoTalk Channel plugin (simpler, limited customization)
- **Recommendation**: Option B for MVP, Option A for Phase 2

**Question**: Database schema for student information - how detailed should parent information be? (Option A)
- **Option A**: Basic parent contact info only
- **Option B**: Detailed parent profiles with separate login access
- **Recommendation**: Option A for MVP

### Design Decisions
**Question**: Navigation structure for Korean vs. English users?  (Let's go with option A )
- **Option A**: Identical navigation in both languages
- **Option B**: Korean-optimized navigation with different structure
- **Recommendation**: Option A for consistency

**Question**: Success stories display - real names or anonymized? (Let's do option B for now)
- **Option A**: Real names with permission
- **Option B**: Anonymized student profiles
- **Recommendation**: Option B for privacy compliance

### Content Strategy
**Question**: Blog content strategy for SEO? (Let's do option A)
- **Option A**: Korean-only content for Naver SEO
- **Option B**: Bilingual content for both markets
- **Recommendation**: Option A initially, expand to Option B

## 📋 Next Steps

1. **Schedule Clarification Meeting**: Discuss all Priority 1 items 
2. **Content Audit**: Review existing Squarespace site content
3. **Service Account Setup**: KakaoTalk, Naver Analytics, and other Korean services
4. **Brand Asset Collection**: Logo variations, team photos, office images
5. **Legal Review**: Ensure compliance with Canadian and Korean regulations

## 📝 Documentation Requirements

Based on clarifications, we'll need to update:
- [ ] PRD with confirmed business details
- [ ] Technical architecture with final integration choices
- [ ] Content migration plan with specific pages and assets
- [ ] Compliance checklist with regulatory requirements
- [ ] Timeline adjustments based on scope clarifications

**Status**: Awaiting user clarification on Priority 1 items before Phase 2 implementation begins.