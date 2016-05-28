package atua.anddev.testtask1.controller;

import atua.anddev.testtask1.entity.Company;
import atua.anddev.testtask1.service.CompanyService;
import com.fasterxml.jackson.core.JsonProcessingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

@EnableWebMvc
@RestController
public class CompanyController {

    @Autowired
    CompanyService companyService;

    @Autowired
    JsonPropertyFilterMixIn jsonFilter;

    @RequestMapping(value = "/getAllCompanies")
    public String getAllCompanies() throws JsonProcessingException {
        return jsonFilter.processObject(companyService.getAllCompanies(), "parent");
    }

    @RequestMapping(value = "/getCompanyById/{companyId}")
    public String getCompanyById(@PathVariable int companyId) throws JsonProcessingException {
        return jsonFilter.processObject(companyService.getCompanyById(companyId), "parent");
    }

    @RequestMapping(value = "/getRootCompanies")
    public String getRootCompanies() throws JsonProcessingException {
        companyService.calcTotalEarnings();
        return jsonFilter.processObject(companyService.getRootCompanies(), "parent");
    }

    @RequestMapping(value = "/getCompaniesWithChildren/{companyId}")
    public String getCompanyWithChildren(@PathVariable int companyId) throws JsonProcessingException {
        return jsonFilter.processObject(companyService.getCompaniesWithChildren(companyId), "parent");
    }

    @RequestMapping(value = "/getCompaniesWithParent/{companyId}")
    public String getCompanyWithParent(@PathVariable int companyId) throws JsonProcessingException {
        return jsonFilter.processObject(companyService.getCompaniesWithParent(companyId), "children");
    }

    @RequestMapping(value = "/addNewCompany")
    public void addCompany(@RequestBody Company company) {
        companyService.addCompany(company);
    }

    @RequestMapping(value = "/updateCompany")
    public void updateCompany(@RequestBody Company company) {
        companyService.updateCompany(company);
    }

    @RequestMapping(value = "/deleteCompany")
    public void deleteCompany(@RequestBody Company company) {
        companyService.deleteCompany(company);
    }

}